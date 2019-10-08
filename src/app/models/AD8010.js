/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AD8010', {
    AD8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AD8_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD8_CODUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD8_TOPICO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AD8_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AD8_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AD8_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AD8_PRIOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AD8_PERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AD8_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD8_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD8_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AD8_NROPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD8_DTREMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AD8_PROSPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD8_LOJPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AD8_EVENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD8_CONTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD8_HRREMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AD8_LASTMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    AD8_EMLNAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    AD8_IDEXC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AD8_CHGKEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AD8_HORA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AD8_HORA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
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
    },
    AD8_ANIVER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AD8_IDESTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AD8_NVESTN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AD8_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'AD8010'
  });
};
