/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EL7010', {
    EL7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL7_TPPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL7_REGIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EL7_SEQREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EL7_SEQPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL7_SEQPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EL7_SEQDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL7_RE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    EL7_DI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EL7_SQEVCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EL7_EXCL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL7_NROREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    EL7_IDLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EL7_NBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EL7_TPINT: {
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
    tableName: 'EL7010'
  });
};
