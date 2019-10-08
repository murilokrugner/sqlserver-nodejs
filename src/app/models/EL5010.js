/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EL5010', {
    EL5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL5_TPPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL5_REGIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EL5_SEQPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EL5_SQEVPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EL5_TIPENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL5_NROREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    EL5_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EL5_DTPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL5_VLCAMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL5_VLEXT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL5_IDLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EL5_PAGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EL5_ARQENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EL5_TPINT: {
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
    tableName: 'EL5010'
  });
};
