/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STO010', {
    TO_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TO_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TO_DATAPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TO_DESCRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TO_DATAINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TO_DATAFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TO_CCUSINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TO_CCUSFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TO_FAMIINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TO_FAMIFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TO_CTRAINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TO_CTRAFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TO_BEMINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TO_BEMFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TO_SITUACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TO_GERMANV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TO_NAOUTIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TO_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TO_TERMINO: {
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
    tableName: 'STO010'
  });
};
