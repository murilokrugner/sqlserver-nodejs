/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STI010', {
    TI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TI_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TI_DATAPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TI_DESCRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TI_DATAINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TI_DATAFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TI_ESTRUTU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TI_CCUSINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TI_CCUSFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TI_CTRAINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TI_CTRAFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TI_SERVINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TI_SERVFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TI_AREAINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TI_AREAFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TI_TIPOINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TI_TIPOFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TI_FAMIINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TI_FAMIFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TI_BEMINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TI_BEMFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TI_TIPMODI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TI_TIPMODF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TI_BLOQITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TI_BLOQFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TI_BLOQFER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TI_ATRASAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TI_SITUACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TI_TERMINO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TI_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TI_TIPOMDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TI_LUBRIFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TI_TIPACOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TI_TOLEPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'STI010'
  });
};
