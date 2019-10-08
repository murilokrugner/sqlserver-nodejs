/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EL4010', {
    EL4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL4_TPPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL4_REGIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EL4_SEQREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EL4_SQEVIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EL4_SQEVCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EL4_TIPENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL4_NROREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EL4_NBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EL4_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EL4_MODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL4_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL4_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL4_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL4_ENQ01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EL4_RC01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL4_EXCL1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL4_ENQ02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EL4_RC02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL4_EXCL2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL4_ENQ03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EL4_RC03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL4_EXCL3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL4_IDLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EL4_SEQAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EL4_ARQENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EL4_TPINT: {
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
    tableName: 'EL4010'
  });
};
