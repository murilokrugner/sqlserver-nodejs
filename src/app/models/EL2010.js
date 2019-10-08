/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EL2010', {
    EL2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL2_TPPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL2_REGIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EL2_SEQREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EL2_SEQPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EL2_SEQDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL2_RE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    EL2_DI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EL2_STTSIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL2_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EL2_FASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL2_SEQPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EL2_NBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    tableName: 'EL2010'
  });
};
