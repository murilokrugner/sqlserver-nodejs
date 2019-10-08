/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EL6010', {
    EL6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL6_TPPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL6_REGIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EL6_SEQPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EL6_SQEVPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EL6_SEQREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EL6_VLCAMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL6_VLEXT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL6_TPINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'EL6010'
  });
};
