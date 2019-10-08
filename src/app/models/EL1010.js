/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EL1010', {
    EL1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL1_TPPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL1_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EL1_SEQPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EL1_REGIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EL1_SEQREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EL1_SEQPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EL1_PARC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL1_VLCAMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL1_VLEXT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL1_NRINVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EL1_MOVTEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    tableName: 'EL1010'
  });
};
