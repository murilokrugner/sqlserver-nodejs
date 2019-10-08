/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AGA010', {
    AGA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AGA_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AGA_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AGA_CODENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    AGA_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AGA_PADRAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AGA_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    AGA_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AGA_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AGA_MUNDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    AGA_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AGA_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AGA_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AGA_COMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
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
    }
  }, {
    tableName: 'AGA010'
  });
};
